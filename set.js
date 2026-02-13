class HashSet{
    constructor(){
        this.size = 0;
        this.capacity = 16;
        this.buckets = new Array(this.capacity).fill().map(() => []);
        this.loadFactor = 0.75;

    }
    
    hash(key) {
        let hashCode = 0;
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
        }
        return hashCode;
    }

    set(key) {
        let index = this.hash(key);

        const bucket = this.buckets[index];

        for (const entry of bucket) {
            if (entry === key) {
                return this;
            }
        }

        bucket.push(key);
        this.size++;

        if (this.size > this.capacity * this.loadFactor) {
            this.resize;
        }
        return key;
    }

    resize() {

        this.capacity = this.capacity * 2;

        const previousArray = this.buckets;

        this.buckets = new Array(this.capacity).fill().map(()=>[]);
        this.size = 0;

        for (let i = 0; i < previousArray.length; i++) {
            for(let j = 0; j < previousArray[i].length; j++) {
                const key = previousArray[i][j].key;
                set(key);

            }
        }
    }

    //has(key) takes a key as an argument and returns true or false based on whether or not the key is in the hash set.

    has(key) {

        let index = this.hash(key);

        const bucket = this.buckets[index];
        
        for (const entry of bucket) {
            if (entry === key) {
                return true;
            }
            
        }
        return false;
    }

    //remove(key) takes a key as an argument. If the given key is in the set map, 
    // it should remove the entry with that key and return true.
    // If the key isn’t in the set map, it should return false.


    remove(key) {
        const index = this.hash(key);

        const bucket = this.buckets[index];

        for(let i = 0; i < bucket.length; i++){
            if (bucket[i]=== key) {
                bucket.splice(i, 1);
                this.size--;
                return true;
            }
        }
        return false;
    }


    //length() returns the number of stored keys in the hash map.

    length() {
        return this.size;

        //without size property

        /*let count = 0;

        for (bucket of this.buckets) {
            count += bucket.length;
        }
        return count;*/
    }

    //clear() removes all entries in the hash map.

    clear() {
        //with for of

        /*for (const bucket of this.buckets) {
            bucket.length = 0;
        }*/

        for (let i = 0; i < this.buckets.length; i++) {
            this.buckets[i] = [];
        }
        this.size = 0;
    }

    // keys() returns an array containing all the keys inside the hash map.

    keys() {

        const setKeyArray = []

        for (const bucket of this.buckets) {
            for (const entry of bucket) {
                setKeyArray.push(entry);

            }
        }
        return setKeyArray;
    }

}
   
const newSet = new HashSet();
console.log(newSet);

console.log(newSet.set("shaz"));

newSet.set("maize");

newSet.set("bena");
newSet.set("beans");
newSet.set("groundnut");

console.log(newSet.keys());

console.log(newSet.remove("bena"));

console.log(newSet.keys());
