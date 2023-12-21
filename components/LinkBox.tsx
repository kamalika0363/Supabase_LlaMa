"use client";
import React, { useEffect, useState } from 'react';
import { createClient } from '@/utils/supabase/client';

const LinkBox: React.FC = () => {
  const [notes, setNotes] = useState<any[] | null>(null);
  const [newNote, setNewNote] = useState<string>('');
  const [selectedLink, setSelectedLink] = useState<string | null>(null);
  const supabase = createClient();

  useEffect(() => {
    fetchData().then(r => r);
  }, []);

  const fetchData = async () => {
    try {
      const { data, error } = await supabase.from('notes').select('id, text')

      if (error) {
        console.error('Error fetching data:', error);
      } else {
        setNotes(data);
      }
    } catch (error) {
      console.error('Error getting data:', error);
    }
  };

  const addNote = async () => {
    try {
      const { data, error } = await supabase.from('notes').insert([
        { text: newNote },
      ]);

      if (error) {
        console.error('Error adding note:', error);
      } else {
        console.log('Note added successfully:', data);
        setNewNote('');
        await fetchData();
      }
    } catch (error) {
      console.error('Error adding note:', error);
    }
  };

  const deleteNote = async (id: number) => {
    try {
      const { error } = await supabase
          .from('notes')
          .delete()
          .eq('id', id)
          .throwOnError()
      setNotes(notes?.filter((note) => note.id !== id) || []);

    } catch (error) {
      console.error('Error deleting note:', error);
    }
  };



  const handleLinkClick = (id: string) => {
    const selectedNote = notes?.find((note) => note.id === id);

    if (selectedNote) {
      window.open(selectedNote.text, '_blank');
    }
  };


  return (
      <div className="sm:w-1/2 bg-gradient-to-r from-[#000000] to-[#090909] sm:p-6 rounded-xl flex flex-col item-center justify-center md:h-full h-96 border-2 border-[#272728] overflow-auto p-4 ">
        <div className="bg-[#04090b] p-5 sm:mt-0 rounded-xl item-center justify-center w-full h-96 border-2 border-[#3a3a3a] overflow-auto">
          <p className="justify-center mb-2 font-bold text-gray-300">Stored Links</p>
          <ul className="list-disc list-inside">
            {notes &&
                notes.map((note) => (
                    <li
                        key={note.id}
                        onClick={() => handleLinkClick(note.id)}
                        className={`whitespace-pre-wrap cursor-pointer ${
                            selectedLink === note.id ? 'text-blue-500' : 'text-gray-300'
                        }`}
                    >
                      {note.text}
                      <button
                          onClick={(e) => {
                            e.stopPropagation();
                            deleteNote?.(note.id);
                          }}
                          className="ml-2 text-red-500 hover:text-red-700"
                      >
                        Delete
                      </button>
                    </li>
                ))}
          </ul>
        </div>

        <form onSubmit={addNote} className="flex mt-20 space-x-4 rounded-lg">
          <input
              type="text"
              value={newNote}
              onChange={(e) => setNewNote(e.target.value)}
              placeholder="Add Links"
              className="text-gray-300 rounded-xl p-2 pl-5 w-full border-2 border-[#3a3a3a] bg-gradient-to-r from-[#0F0F0F] to-[#2E2E2E] font-semibold"
          />
          <button
              type="submit"
              className="text-white rounded-xl p-3 border-2 border-[#3a3a3a] bg-[#272728]"
          >
            <img src={"Icon.svg"} alt="Add" />
          </button>
        </form>
      </div>
  );
};

export default LinkBox;
