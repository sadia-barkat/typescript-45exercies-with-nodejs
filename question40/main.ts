//creating function
function make_album (artist_name:string , album_title:string , tracks?:number){
    let album:{artist:string, title:string , tracks?:number}={
        artist:artist_name,
        title:album_title,

    };
    if (tracks!==undefined){
        album.tracks=tracks;
    }
    return album;
}

//calling function and creating variables
let album1=make_album("Artist no. 1","Album title 1");
let album2=make_album("Sadia","Album title 2");

//calling tracks also
let album3=make_album("daniya","album title 3", 10);
console.log(album1);
console.log(album2);
console.log(album3);

