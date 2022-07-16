const jsonString = '{"a":1, "b":2, "foo":"bar"}'; // string version of a JS Object
jsonString; // a string, of course :)
console.log("jsonString: ", jsonString);

const obj = JSON.parse(jsonString); //parseg하면 string -> object로 변함 (deserialization)
console.log("obj: ", obj);

delete obj.foo;

console.log(JSON.stringify(obj)); //stringfy하면 obj -> string으로 변함. (serialization)
