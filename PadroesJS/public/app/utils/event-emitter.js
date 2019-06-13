const events = new Map();

export const EventEmitter = {
  //metodo on
  on(event, listener) {
    if (!events.has(event)) events.set(event, []);
    events.get(event).push(listener);
  },
  //metodo emit
  emit(event, data) {
    const listeners = events.get(event);
    if (listeners) listeners.forEach(listener => listener(data));
  }
};
