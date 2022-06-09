USE PlaylistApp;
SELECT * FROM users WHERE email="tzuzulcode@gmail.com";

SELECT * FROM users;

INSERT INTO playlists(owner,name) VALUES(2,"Mi playlist 2");
SELECT * FROM playlists;

INSERT INTO songs(title) VALUES("Cancion 1");
SELECT * FROM songs;

INSERT INTO playlists_songs(id_playlist,id_song) VALUES(2,1);

SELECT * FROM playlists_songs;

SELECT playlists.id as "id_playlist", `name`, songs.id as "id_song", title 
FROM playlists 
JOIN playlists_songs ON playlists.id=playlists_songs.id_playlist 
JOIN songs ON songs.id=playlists_songs.id_song;

DELETE FROM users where id = 2;