function choice(foods){
    let index = Math.floor(Math.random()*foods.length);
    return foods[index];
}

function remove(foods,item){
      let arr =[...foods];
       let index = arr.indexOf(item);
       arr.splice(index,1);
       return arr;
}

 export {choice,remove};