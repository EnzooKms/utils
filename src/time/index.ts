interface Time {
  sleep(duration: number): boolean;
}

interface TimeConstructor {
  new (value?: any): Time;
  now(): number;
  readonly prototype: Time;
}

export declare const Time: TimeConstructor;
