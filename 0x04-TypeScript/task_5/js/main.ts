// Interfaces with branding
export interface MajorCredits {
  credits: number;
  readonly __brand: 'Major';
}

export interface MinorCredits {
  credits: number;
  readonly __brand: 'Minor';
}

// Functions to sum credits
export function sumMajorCredits(
  subject1: MajorCredits,
  subject2: MajorCredits
): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    __brand: 'Major'
  };
}

export function sumMinorCredits(
  subject1: MinorCredits,
  subject2: MinorCredits
): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    __brand: 'Minor'
  };
}

// Example usage
const math: MajorCredits = { credits: 3, __brand: 'Major' };
const physics: MajorCredits = { credits: 4, __brand: 'Major' };

const sumMajors = sumMajorCredits(math, physics);
console.log(sumMajors); // { credits: 7, __brand: 'Major' }

const history: MinorCredits = { credits: 2, __brand: 'Minor' };
const art: MinorCredits = { credits: 3, __brand: 'Minor' };

const sumMinors = sumMinorCredits(history, art);
console.log(sumMinors); // { credits: 5, __brand: 'Minor' }
