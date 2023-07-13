interface Album {
    artistName: string,
    albumTitle: string,
    tracks?: number;
}

function make_album(artistName: string, albumTitle: string, tracks?: number): Album {
    const album: Album = {
        artistName: artistName,
        albumTitle: albumTitle
    };

    if (tracks) {
        album.tracks = tracks;
    }

    return album;
}

console.log(make_album('Artist 1', 'Album 1'));
console.log(make_album('Artist 2', 'Album 2', 12));
console.log(make_album('Artist 3', 'Album 3', 8));