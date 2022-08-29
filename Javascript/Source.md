### **_Course_**

[The Complete JavaScript Course 2022: From Zero to Expert!
](https://cognizant.udemy.com/course/the-complete-javascript-course) - **Udemy**

### **_Javascript_**

_Javascript is a high level, object oriented, multi-paradigm programming language._

We can do dynamic effects and web applications on browser - Front-end

Web applications on web servers - Back-end

Native mobile and desktop applications

### **_Content_**

- [Original Starter Pack Link](https://github.com/jonasschmedtmann/complete-javascript-course) / [From this repo](../Javascript/complete-javascript-course-master/)

- [Course Material](../Javascript/course-material-v2.1/)

### **_Course Assignments and Challenges_**

- [Assignments](../Javascript/Assignments/)
- [Coding Challenges](../Javascript/Coding%20Challenges/)

### **_Informations_**

**_Strict_**

Always use strict on the top of the script

    "use strict";

**_Commenting_**

-     // - For single line comment

-     /* */ - For multi line comment

**_Data Type_**

    typeof variable

**_Type Conversion and Coercion_**

_Conversion_

    Number("23") -> 23
    String(23) -> "23"

_Coercion_

    console.log("23" + "1") -> "231"
    console.log("23" - "1") -> 22

**_Falsy Values_**

    0 , '' , null , undefined, NaN

**_Nullish Values_**

    null, undefined

**_Array Manipulation_**

    arr.push(value) ->pushes value to the last of the array
    arr.pop() -> removes the last element of the array
    arr.unshift(value) -> pushes value to the first of the array
    arr.shift() -> removes the first element of the array

**_Three Function Definitions_**

_Function Declaration_

    function fnName(parameters){
        codes;
    }

_Function Expression_

    const fnName = function (parameters){
        codes;
    }

_Arrow Function_

    const fnName = (parameters) =>{
        codes;
    };

**_Destructing_**

_Objects_

    // Initialization

    let object = {
        name : "Joel",
        age : 22,
        likes : "food"
    };

    // Destructing

    let {name,age : myage = 0, likes} = object;

- name takes the object's name
- myage variable takes the object's age and gives the default value as 0 if not available
- likes takes the object's likes

_Arrays_

    //Initialization

    let arr = [2,1,0];

    // Destructing

    let [a, ,b=0] = arr;

- a takes the value of arr[0] ie., 2
- arr[1] ie., 1 is given up to the hole
- b takes the value of arr[2] and gives the default value as 0 if not available

**_Spread and Rest Operator_**

    // Rest

    let arr = [100,10,20.14.122];
    let [a,b,...remaining] = arr;

    //Spread

    let arr = [10,20,...remaining];

P.S They can also be used on objects

**_Short Circuiting_**

**For OR,**

If the first value is a truthy value then it is evaluated and given out the result without even going to the next one.

    let a = 0 || 3 || "hello" || undefined;
    // a = 3

When JS sees the 3, it doesn't even sees the next "hello" or undefined because the result will be true. So, it short circuits giving out the first value as the result.

It saw the 0 and since it is a falsy value, it moves to the next value. It provides the first truthy value as the result.

**For AND,**

If the first value is a falsy value then the next values are not evaluated and provides the first falsy value as the result. If all the values are truthy values then the evaluation continues till the last and provides it as the result.

    let a = 7 && "Joe" && null && 0;
    // a = null

It sees the 7 and "Joe" as truthy value and the evaluation continues and when the null came which is a falsy value, the evaluation stops (short circuits)giving out the null as our result.

**_Nullish Coalescing Operator_**

The nullish Coalescing operator (??) is almost the same as the OR operator where OR looks at falsy values as false and Nullish looks at the nullish values as false.
So, 0 , '' are considered as truthy values in Nullish Coalescing Operator.

    let a = 0 ?? 3 ?? "hello" ?? undefined;
    // a = 0

**_For Of Loop_**

    for(const element of elements){
        // code
    }

**_Optional Chaining_**

If a certain property does not exists, it returns undefined.

    let a = {
        value : {
            yo : "hi",
            hello : "man"
        },
        key : 21
    }

    console.log(a.value?.yo);
    console.log(a.week?.day)

The a.value exists so the yo value is returned.
The a.week does not exists so undefined is returned.

**_Key, values, Entries_**

- Key

        // For Objects
        let keys = Object.keys(objectName);
        // For Arrays
        keys = arrayName.keys();

- Values

        // For Objects
        let values = Object.values(objectName);
        // For Arrays
        values = arrayName.values();

- Entries

        // For Objects
        let entries = Object.entries(objectName);
        // For Arrays
        entries = arrayName.entries();

**_Sets_**

Sets have only unique elements and removes the duplicates

    setName.size provides the set size

    setName.has(element) tells whether the element is in the set

    setName.add(element) adds the element

    setName.remove(element) removes the element

    setName.clear() will clears the set completely

**_Map_**

Map provides the mapping between key and value

    const mapName = new Map();

    mapName.set(key,value); sets the key value

    mapName.set(key1,value1).set(key2,value2); sets two key value

    mapName.get(key); returns the value of the key

    mapName.remove(key); removes the element

    mapName.size; provides the size

    mapName.clear(); clears the map
