import requests #need to install it from the command line using pip
import utilities

# How do you download some sample audio from the tracks data?
def search_for_tracks(search_term:str):
    search_term = search_term.replace(' ', '%20')
    # create query url:
    url = 'https://www.apitutor.org/spotify/simple/v1/search?type=track&q=' + search_term

    # retrieve the data:
    response = requests.get(url)
    return response.json()

term = input('Enter a search term to look for some tracks: ')
tracks = search_for_tracks(term)

for track in tracks:
    song_url = track.get('preview_url')
    if song_url is None:
        continue
    
    local_file_name = track.get('name').lower().replace(' ', '') + '.mp3'
    local_file_name = local_file_name.replace('/', '')
    local_file_name = local_file_name.replace('\'', '')

    # hack for VS code (not necessary in IDLE I don't think):
    local_file_path = utilities.get_file_path(local_file_name)
    print('Saving to:', local_file_name)
    save_track_to_disk(song_url, local_file_path)
    time.sleep(1)