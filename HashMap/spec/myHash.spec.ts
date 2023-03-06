import {MyHash} from '../src/myHash';

describe('MyHash', () => {
  describe('initialisation', () => {
    it('throws when size input is less than 0', () => {
      expect(() => {
        const myhash = new MyHash(4.5)
      }).toThrow()
    })
  });
  describe('string as key', () => {
    describe("retrieves", () => {
      it('saves and retrieve correctly', () => {
        const myhash = new MyHash(3);
        myhash.set("key", "information");
        const result = myhash.retrieve("key");
        expect(result).toBe("information");
      });
      it('returns null for non-existing key', () => {
        const myhash = new MyHash(3);
        myhash.set("key", "information");
        const result = myhash.retrieve("lex");
  
        expect(result).toBe(null);
      });
  
      it('saves and retrieve correctly (with conflict)', () => {
        const myhash = new MyHash(3);
        myhash.set("key", "information");
        myhash.set("lex", "another information");
        myhash.set("jfy", "some data");
        myhash.set("lex", "changed data")
        const result = myhash.retrieve("key");
        const result2 = myhash.retrieve("lex");
        const result3 = myhash.retrieve("jfy");
  
        expect(result).toBe("information");
        expect(result2).toBe("changed data");
        expect(result3).toBe("some data");
      });
    })
    describe("changes existing value", () => {
      it('changes and retrieve correctly', () => {
        const myhash = new MyHash(3);
        myhash.set("key", "data");
        myhash.set("key", "information");
        const result = myhash.retrieve("key");
        expect(result).toBe("information");
      });
      it('returns null for non-existing key (with same hashCode)', () => {
        const myhash = new MyHash(3);
        myhash.set("key", "information");
        myhash.set("lex", "another information");
        const result = myhash.retrieve("jfy");
  
        expect(result).toBe(null);
      });
    })
    describe("delete", () => {
      it('delete key successfully', () => {
        const myhash = new MyHash(3);
        myhash.set("key", "information");
        myhash.delete("key");
        const result = myhash.retrieve("key");
  
        expect(result).toBe(null);
      });
      it('delete key correctly (with conflict)', () => {
        const myhash = new MyHash(3);
        myhash.set("key", "information");
        myhash.set("lex", "another information");
        myhash.set("jfy", "some data");
        myhash.delete("lex")
        const result = myhash.retrieve("key");
        const result2 = myhash.retrieve("lex");
        const result3 = myhash.retrieve("jfy");
  
        expect(result).toBe("information");
        expect(result2).toBe(null);
        expect(result3).toBe("some data");
      });
      it('delete non-existing key', () => {
        const myhash = new MyHash(3);
        myhash.set("key", "information");
        myhash.delete("lex");
        const result = myhash.retrieve("key");
  
        expect(result).toBe("information");
      });
    })
  });
  describe('number as key', () => {
    it('saves and retrieve correctly', () => {
      const myhash = new MyHash(3);
      myhash.set(5, "information");
      const result = myhash.retrieve(5);
      expect(result).toBe("information");
    });
    it('saves and retrieve correctly (with conflict)', () => {
      const myhash = new MyHash(3);
      myhash.set(5, "information");
      myhash.set(8, "another information");
      myhash.set(11, "extra data");
      const result = myhash.retrieve(5);
      const result2 = myhash.retrieve(8);
      const result3 = myhash.retrieve(11);

      expect(result).toBe("information");
      expect(result2).toBe("another information");
      expect(result3).toBe("extra data");
    });
  });
})