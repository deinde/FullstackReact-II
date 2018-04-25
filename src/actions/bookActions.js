'use strict'


//UPDATE BOOK
export function updateBooks(id){
    return {
        type:"UPDATE_BOOK",
        payload:id
    }
}



//POST BOOK
export function postBooks(book){
    return {
        type:"POST_BOOK",
        payload:book
    }
}

//DELETE BOOK
export function deleteBooks(id){
    return {
        type:"DELETE_BOOK",
        payload:id
    }
}

//GET BOOK

export function getBooks(){
    return{ 
       type:"GET_BOOKS"
    }
}

export function talk(){
    console.log('Holllllaaaaaaaa!!!!!!!')
}

