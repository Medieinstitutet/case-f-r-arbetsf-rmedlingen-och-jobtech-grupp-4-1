export const generateSubstrings = (input: string): string[] => {
    const substrings: string[] = [];
    for (let i = 0; i < input.length; i++) {
      for (let j = i + 1; j <= input.length; j++) {
        substrings.push(input.slice(i, j));
      }
    }
    return substrings;
 };
 