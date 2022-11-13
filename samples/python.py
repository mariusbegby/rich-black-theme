import datetime as dt
from tkinter import *


def openFromFile(filename_field, listbox, statusLabel):
    try:
        file = open(filename_field.get(), "r")
        lines = file.readlines()
        listbox.delete(0, END)

        for line in lines:
            content = line.rstrip()
            listbox.insert("end", content)

        statusLabel.config(text=f"Opened list from {filename_field.get()}")
    except FileNotFoundError:
        statusLabel.config(text="File not found, try again.")
    except:
        statusLabel.config(text="Unknown issue occured. Try again.")





