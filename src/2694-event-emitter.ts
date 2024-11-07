type Callback = (...args: any[]) => any;
type Subscription = {
  unsubscribe: () => void;
};

class EventEmitter {
  private readonly eventBus: Map<string, Callback[]> = new Map();

  subscribe(eventName: string, callback: Callback): Subscription {
    if (!this.eventBus.has(eventName)) {
      this.eventBus.set(eventName, [callback]);
    } else {
      const callbackArray = this.eventBus.get(eventName);

      if (callbackArray) {
        callbackArray.push(callback);
        this.eventBus.set(eventName, callbackArray);
      }
    }

    return {
      unsubscribe: () => {
        const callbacks = this.eventBus.get(eventName);

        if (callbacks) {
          const index = callbacks.indexOf(callback);
          callbacks.splice(index, 1);
          this.eventBus.set(eventName, callbacks);
        }
      },
    };
  }

  emit(eventName: string, args: any[] = []): any {
    const eventCallbacks: Callback[] = this.eventBus.get(eventName) ?? [];
    const results: any[] = [];

    eventCallbacks?.forEach((callback) => {
      results.push(callback(...args));
    });

    return results;
  }
}
