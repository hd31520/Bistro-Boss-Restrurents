
// const cart = [{}]
// function findCommonElements(array, properties) {
//     const elementCount = {};

//     array.forEach(item => {
//         const propertyValues = properties.map(property => item[property]);
//         const key = propertyValues.join('|');

//         elementCount[key] = (elementCount[key] || 0) + 1;
//     });



//     const commonElements = Object.entries(elementCount)
//         .filter(([key, count]) => count > 1)
//         .map(([key, count]) => {
//             const propertyValues = key.split('|');
//             const element = {};
//             properties.forEach((property, index) => {
//                 element[property] = propertyValues[index];
//             });
//             return { ...element, count };
//         });

//     return commonElements;
// }

// // Example: Find common elements based on 'name', 'email', 'image', and 'price' properties
// const commonElements = findCommonElements(cart, ['name', 'email', 'image', 'price']);