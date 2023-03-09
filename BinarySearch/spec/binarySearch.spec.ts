import {binarySearch} from '../src/binarySearch';

describe("BinarySearch", () => {
  describe("use on string array", () => {
    it("returns the middle index when target is in the middle", () => {
      const inputArray:string[] = ["a", "c", "e"];
      const wantIndex = 1;
      const actual = binarySearch(inputArray, "c");
      expect(actual).toBe(wantIndex);
    });
    it("returns correct index at head", () => {
      const inputArray:string[]= "abc def ghi jkl mno pqr stu vw x y z".split(' ');
      const wantIndex = 0;
      const actual = binarySearch(inputArray, "abc");
      
      expect(actual).toBe(wantIndex);
    });
    it("returns correct index smaller than mid", () => {
      const inputArray:string[]= "abc def ghi jkl mno pqr stu vw x y z".split(' ');
      const wantIndex = 1;
      const actual = binarySearch(inputArray, "def");
      
      expect(actual).toBe(wantIndex);
    });
    it("returns correct index larger than mid", () => {
      const inputArray:string[]= "abc def ghi jkl mno pqr stu vw x y z".split(' ');
      const wantIndex = 8;
      const actual = binarySearch(inputArray, "x");
      
      expect(actual).toBe(wantIndex);
    });
    it("returns correct index when target at tail", () => {
      const inputArray:string[]= "abc def ghi jkl mno pqr stu vw x y z".split(' ');
      const wantIndex = 10;
      const actual = binarySearch(inputArray, "z");
      
      expect(actual).toBe(wantIndex);
    });
    describe("non-existent target", () => {
      it("returns -1 if non-existent target is within range", () => {
        const inputArray:string[]= "abc def ghi jkl mno pqr stu vw x y z".split(' ');
        const wantIndex = -1;
        const actual = binarySearch(inputArray, "non-exist");
        
        expect(actual).toBe(wantIndex);
      });
      it("returns -1 if non-existent target is before head", () => {
        const inputArray:string[]= "bc def ghi jkl mno pqr stu vw x y z".split(' ');
        const wantIndex = -1;
        const actual = binarySearch(inputArray, "aaa");
        
        expect(actual).toBe(wantIndex);
      });
      it("returns -1 if non-existent target is after tail", () => {
        const inputArray:string[]= "abc def ghi jkl mno pqr st u v wx yz".split(' ');
        const wantIndex = -1;
        const actual = binarySearch(inputArray, "zzz");
        
        expect(actual).toBe(wantIndex);
      });
    })
  });
  describe("use on number array", () => {
    it("returns the middle index when target is in the middle", () => {
      const inputArray:number[] = [50, 70, 90];
      const wantIndex = 1;
      const actual = binarySearch(inputArray, 70);
      expect(actual).toBe(wantIndex);
    });
    it("returns the proper index when target at head", () => {
      const inputArray:number[] = [40, 50, 60, 70, 80, 90, 100];
      const wantIndex = 0;
      const actual = binarySearch(inputArray, 40);
      
      expect(actual).toBe(wantIndex);
    });
    it("returns the proper index if target less than middle", () => {
      const inputArray:number[] = [40, 50, 60, 70, 80, 90, 100];
      const wantIndex = 1;
      const actual = binarySearch(inputArray, 50);
      
      expect(actual).toBe(wantIndex);
    });
    describe("target not found", () => {
      it("returns -1 if non-existing target is within range", () => {
        const inputArray:number[]= [41, 45, 46, 78, 100, 120];
        const wantIndex = -1;
        const actual = binarySearch(inputArray, 42);
        
        expect(actual).toBe(wantIndex);
      });
      it("returns -1 when target smaller than head", () => {
        const inputArray:number[] = [40, 50, 60, 70, 80, 90, 100];
        const wantIndex = -1;
        const actual = binarySearch(inputArray, 10);
        
        expect(actual).toBe(wantIndex);
      });
      it("returns -1 when target larger than tail", () => {
        const inputArray:number[] = [40, 50, 60, 70, 80, 90, 100];
        const wantIndex = -1;
        const actual = binarySearch(inputArray, 100000);
        
        expect(actual).toBe(wantIndex);
      });
    })
  });
  describe("edge cases", () => {
    it("returns -1 when array is empty", () => {
      const inputArray:number[] = [];
      const actual = binarySearch(inputArray, 5);
      expect(actual).toBe(-1)
    });

    it("throws when the array type does not match the target type", () => {
      const inputArray:string[] = ["a", "c", "e"];
      expect(() => binarySearch(inputArray, 5)).toThrow("target type is different from array element type")
    });
    it("throws when the array type does not match the target type", () => {
      const inputArray:number[] = [2, 4, 6];
      expect(() => binarySearch(inputArray, "4")).toThrow("target type is different from array element type")
    });
    it("throws when input Array is not sorted asec", () => {
      const inputArray:number[] = [1, 4, 3, 2];
      expect(()=> binarySearch(inputArray, 3)).toThrow("array is not sorted ascendingly")
    } )
  })
})