export class Day {
    DayOfTheWeek = -1;
    DayNumber = 0;
    Month = -1;
    Year = 0;
    WeekNumber = 0;
    Disable = false;
    IsToday = false;
    Events: CalenderEvent[] = []
    constructor(init?: Partial<Day>) {
        Object.assign(this, init);
    }
}

export class WeekDay {
    WeekDay = '';
    WeekDayNumber = -1;
    constructor(init?: Partial<WeekDay>) {
        Object.assign(this, init);
    }
}

export const WeekDays = [
    new WeekDay({ WeekDay: 'Sunday', WeekDayNumber: 0 }),
    new WeekDay({ WeekDay: 'Monday', WeekDayNumber: 1 }),
    new WeekDay({ WeekDay: 'Tuesday', WeekDayNumber: 2 }),
    new WeekDay({ WeekDay: 'Wednesday', WeekDayNumber: 3 }),
    new WeekDay({ WeekDay: 'Thursday', WeekDayNumber: 4 }),
    new WeekDay({ WeekDay: 'Friday', WeekDayNumber: 5 }),
    new WeekDay({ WeekDay: 'Saturday', WeekDayNumber: 6 }),
];

export const MonthNames = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE',
    'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'
];


export enum DayOfWeek {
    Sunday = 0,
    Monday = 1,
    Tuesday = 2,
    Wednesday = 3,
    Thursday = 4,
    Friday = 5,
    Saturday = 6,
}

export class CalenderEvent {
    event_name = '';
    date = new Date();
    constructor(init?: Partial<CalenderEvent>) {
        Object.assign(this, init);
    }
}
export class CalenderEventOutput extends CalenderEvent {
    event_type: EventTypes;
    constructor(init?: Partial<CalenderEventOutput>) {
        super();
        Object.assign(this, init);
    }
}



export enum EventTypes {
    AddCalenderEvent = 'AddEventClick',
    CalendarEvent = 'EventClick'
}