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
}
   
const newSet = new HashSet();
console.log(newSet);

console.log(newSet.set("shaz"));