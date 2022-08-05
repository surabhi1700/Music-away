let musics = [

    {
        id:1,
        name: "Anyone",
        artist: "Justin Bieber",
        audioScr:"audios/Anyone(PaglaSongs).mp3",
        imageScr: "pics/4637_Bieber-Anyone.jpg"
    },
    {
        id:2,
        name: "Heat-Waves",
        artist: "Animals",
        audioScr:"audios/Heat-Waves(PaglaSongs).mp3",
        imageScr: "pics/heat.jpg"
    },
    {
        id:3,
        name: "Night Changes",
        artist: "One- Direction",
        audioScr:"audios/Night-Changes(PaglaSongs).mp3",
        imageScr: "pics/night.jpg"
    },
    {
        id:4,
        name: "Somebody Like U",
        artist: "Alan Walker",
        audioScr:"audios/Somebody-Like-U(PaglaSongs).mp3",
        imageScr: "pics/Somebody-Like-U.jpg"
    },
    {
        id:5,
        name: "Jealousy-Jealousy",
        artist: "Olivia Rodgiro",
        audioScr:"audios/Jealousy-Jealousy(PaglaSongs).mp3",
        imageScr: "pics/jealosy.jpg"
    },
    {
        id:6,
        name: "No-Lie",
        artist: "Sean Paul, Dua Lipa",
        audioScr:"audios/No-Lie(PaglaSongs).mp3",
        imageScr: "pics/ab67616d0000b2737c19386a7c7854ddd46a7c08.jpg"
    }

]

for(let i=0;i<musics.length; i++ )
{

    let tile=document.createElement("div");
    tile.classList.add("tile");
    
    let thumbnail=document.createElement("div");
    thumbnail.classList.add("thumbnail");
    
    let img=document.createElement("img");
    img.src=musics[i].imageScr;

    thumbnail.append(img);
    tile.append(thumbnail);
    
    let description=document.createElement("div");
    description.classList.add("description");
    
    let h2=document.createElement("h2");
    h2.append(musics[i].name);
    description.append(h2);
    
    let h3=document.createElement("h3");
    h3.append(musics[i].artist );
    description.append(h3);
    
    tile.append(description);

    tile.addEventListener("click",function(){
        playmusic(musics[i]);
    });
    
    document.querySelector(".music-list").append(tile);

}

function playmusic(music)
{
    document.querySelector(".player").style.marginLeft="0";
    document.querySelector(".main-thumbnail-img").src=music.imageScr;
    document.querySelector(".song-name").innerText=music.name;
    document.querySelector(".song-artist").innerText=music.artist;
    document.querySelector(".audio").src=music.audioScr;
    
}

function closePlayer()
{
    document.querySelector(".player").style.marginLeft="100%";
    document.querySelector(".audio").pause();
}



