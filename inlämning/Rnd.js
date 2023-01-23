// Simple Math.random() wrapper for generating random range-based numbers
class Rnd
{
    constructor() {};

    static Rnd(aMin, aMax)
    {
        console.assert(!isNaN(aMin), "aMin must be a number!");
        console.assert(!isNaN(aMax), "aMax must be a number!");
        console.assert(aMin < aMax, "aMin must be smaller than aMax");

        return (Math.floor(Math.random() * ((aMax + 1) - aMin))) + aMin;
    }
}