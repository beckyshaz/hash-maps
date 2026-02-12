class HashMap{
    constructor() {
        this.loadFactor = 0.75;

        this.capacity = 16;

        this.buckets = new Array(this.capacity).fill().map(() => []);
    }

    hash(key) {
        let hashCode = 0;

        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
          hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
        }
      
        return hashCode;
      } 


      set(key, value) {
        const  bucktLocation = this.hash(key);

        const buckets = this.buckets;

        const bucket = buckets[bucktLocation];

        for (const i of  bucket) {
            if (i.key === key) {
                i.value = value;
                return;
            }
        }

        bucket.push({key, value});
        return value;
      }


      doubleLoadFactor() {
        let exeeded = this.loadFactor * this.capacity;
        if (this.capacity > exeeded) {
          this.capacity * 2;
        }

        const previousArray = this.buckets;

        this.buckets = new Array(this.capacity).fill().map(() => []);



      }

      //get(key) takes one argument as a key and returns the value that is assigned to this key.
      // If a key is not found, return null.

      get(key) {
        const bucktLocation = this.hash(key);

        const bucket = this.buckets[bucktLocation];

        for (const entry of bucket) {
          if (key === entry.key) {
            return entry.value;
          }

        }
        return null;

      }

      //has(key) takes a key as an argument and returns true or false based on whether
      // or not the key is in the hash map.

      has(key) {
        const bucketLocation = this.hash(key);

        const bucket = this.buckets[bucketLocation];

        for (let i = 0; i < bucket.length; i++) {
          if(bucket[i].key === key) {
            return true;
          }
        }
        return false;
      }

      //remove(key) takes a key as an argument. If the given key is in the hash map,
      // it should remove the entry with that key and return true.
      // If the key isn’t in the hash map, it should return false.


      remove(key) {
        const bucketLocation = this.hash(key);

        const bucket = this.buckets[bucketLocation];

        for (const entry of bucket) {
          if(entry.key === key) {
            bucket.pop(entry);
            return true;
          }
        }
        return false;
      }

      //length() returns the number of stored keys in the hash map.

      length() {

        let count = 0;
        for (let i = 0; i < this.buckets.length; i++) {
          for (let j = 0; j < this.buckets[i].length; j++) {
            if (this.buckets[i][j].key) {
              count += 1;
            }

          }
        }
        return count;
      }
    
}

const map = new HashMap();

console.log(map);

console.log(map.hash("manon"));


console.log(map.set("sharon", "rebecca"));

map.set("Toby", "akilo");
map.set("lily", "turi");

map.set("coby", "tony");

map.set("tobias", "shaz");

console.log(map.get("sharon"));
console.log(map.has("sharon") );


//console.log(map.remove("sharon"));
//console.log(map.has("sharon"));

console.log(map.length());



