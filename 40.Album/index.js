function make_album(artistName, albumTitle, tracks) {
    var album = {
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
