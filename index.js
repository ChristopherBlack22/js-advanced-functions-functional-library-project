function setAsArray(collection) {
    if (Object.values(collection)) {
        return Object.values(collection)
    } 
}


function myEach(collection, callback) {
    let array = setAsArray(collection);
    for (let i = 0; i < array.length; i++) {
        callback(array[i])
    }         
    return collection
}

function myMap(collection, callback) {
    let array = setAsArray(collection);
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(callback(array[i]))
    }  
    return newArray
}

function myReduce(collection, callback, acc) {
    let array = setAsArray(collection);
    if (!acc) {
        acc = array[0];
        array = array.slice(1)
    }
 
    for (let i = 0; i < array.length; i++) {
        acc = callback(acc, array[i], array)
    }
    return acc;
}

function myFind(collection, predicate) {
    let array = setAsArray(collection);
    for (let i = 0; i < array.length; i++) {
        if (predicate(array[i])) {
            return array[i]
        }
    }
}

function myFilter(collection, predicate) {
    let array = setAsArray(collection);
    let resultArray = [];
    for (let i = 0; i < array.length; i++) {
        if (predicate(array[i])) {
            resultArray.push(array[i])
        }
    }
    return resultArray
}

function mySize(collection) {
    let array = setAsArray(collection);
    let result = 0;
    for (let i = 0; i < array.length; i++) {
        result += 1
    }
    return result
}

function myFirst(array, integer) {
    if (integer) {
        return array.slice(0, integer)
    } else {
        return array.slice(0, 1)[0]
    }
}

function myLast(array, integer) {
    if (integer) {
        return array.slice(-integer)
    } else {
        return array.slice(-1)[0]
    }
}

function myKeys(object) {
    let keyArray = [];
    for (const property in object) {
        keyArray.push(property)
    }
    return keyArray
}

function myValues(object) {
    let valueArray = [];
    for (const property in object) {
        valueArray.push(object[property])
    }
    return valueArray
}