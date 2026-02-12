export class HashMap{
    constructor() {
      this.size = 0;

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
      this.size++;

      let exceeded = this.loadFactor * this.capacity;
      if (this.size > exceeded) {
         this.resize();
        }
        return value;
      }


      resize() {

        this.capacity = this.capacity * 2;
        console.log(this.capacity);

        const previousArray = this.buckets;

        this.buckets = new Array(this.capacity).fill().map(() => []);
        this.size = 0;
        
        for (let i = 0; i < previousArray.length; i++) {
          for (let j = 0; j < previousArray[i].length; j++) {
            const key = previousArray[i][j].key;
            const value = previousArray[i][j].value;

            this.set(key, value);
            

          }
        }

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
            this.size--;
            return true;
          }
        }
        return false;
      }

      //length() returns the number of stored keys in the hash map.

      length() {

       // let count = 0;

        //for (let i = 0; i < this.buckets.length; i++) {

          //simpler version
          //count += this.buckets[i].length;
          //return count;
         // for (let j = 0; j < this.buckets[i].length; j++) {
          //  if (this.buckets[i][j].key) {
           //   count += 1;
          //  }

          //}
        //}
        return this.size;
      }

      //clear() removes all entries in the hash map

      clear() {
        
        //for (const i = 0; i < this.buckets.length; i++) {
        //this.buckets[i] = [];
        //}
        
        for (const bucket of this.buckets) {
          bucket.length = 0;
          this.size = 0;
        }
        
      }
      
      //keys() returns an array containing all the keys inside the hash map.

      keys() {
        
        const keyArray = [];

        for (let i = 0; i < this.buckets.length; i++) {
          for (let j = 0; j < this.buckets[i].length; j++) {
            keyArray.push(this.buckets[i][j].key);

          }   
        }
        return keyArray;
      
      }

      //values() returns an array containing all the values.
      values() {
      const valuesArray = [];

      for (let i = 0; i < this.buckets.length; i++) {
        for (let j = 0; j < this.buckets[i].length; j++) {
          valuesArray.push(this.buckets[i][j].value);

        }   
      }
      return valuesArray;
    
    }

    //entries() returns an array that contains each key, value pair.
    // Example: [[firstKey, firstValue], [secondKey, secondValue]]

    entries() {

      const entriesOuterArray = [];
      

      for (let i = 0; i < this.buckets.length; i++) {
        for (let j = 0; j < this.buckets[i].length; j++) {
          const entriesArray = [];
          entriesArray.push(this.buckets[i][j].key, this.buckets[i][j].value);
          entriesOuterArray.push(entriesArray);

        }   
        
      }
      return entriesOuterArray;
    
    }

    
}
