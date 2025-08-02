import tilepad from "@tilepad/sdk";


/** @type {import("@tilepad/sdk").Inspector | null} */
let currentInspector = null;

/** @type {Number} */
let counter = 0;

/**
 * Increase the counter and update the inspector
 * 
 * @param {Number} amount 
 */
function increase(amount) {
  counter += amount;
  if (currentInspector) {
    currentInspector.send({ type: "COUNTER", value: counter });
  }
}

/**
 * Decrease the counter and update the inspector
 * 
 * @param {Number} amount 
 */
function decrease(amount) {
  counter -= amount;
  if (currentInspector) {
    currentInspector.send({ type: "COUNTER", value: counter });
  }
}

// Update the current counter from the stored properties
tilepad.getProperties().then((properties) => {
  counter = Number(properties.counter ?? 0);
});

// Store the current open inspector
tilepad.on("inspector_open", ({ inspector }) => {
  currentInspector = inspector;
});

// Handle inspector messages
tilepad.on("inspector_message", ({ inspector, message }) => {
  switch (message.type) {
    case "GET_COUNTER": {
      inspector.send({ type: "COUNTER", value: counter });
      break;
    }
  }
});

// Handle tile clicks
tilepad.on("tile_clicked", ({ ctx, properties }) => {
  switch (ctx.action_id) {
    case "increase": {
      increase(Number(properties.amount ?? 1));
      break;
    }
    case "decrease": {
      decrease(Number(properties.amount ?? 1));
      break;
    }
  }
});

// Connect to tilepad
tilepad.connect();
