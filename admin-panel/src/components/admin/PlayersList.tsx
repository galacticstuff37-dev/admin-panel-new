import React from 'react';
import { Link } from 'react-router-dom';

const MOCK_PLAYERS = [
  { id: '4545322232', email: 'johndoe@gmail.com', name: 'John Doe', country: 'Canada', registerDate: '04/02/2021' },
  { id: '4545322233', email: 'pankich@gmail.com', name: 'Paul Klimov', country: 'Canada', registerDate: '04/02/2021' },
  { id: '4545322234', email: 'alice@example.com', name: 'Alice Smith', country: 'USA', registerDate: '15/03/2022' },
];

export function PlayersList() {
  return (
    <>
      <div className="border-contour border-b border-solid flex h-16 items-center justify-between px-6 py-3 shrink-0 w-full">
        <div className="flex flex-1 gap-0.5 items-center min-h-0 min-w-0">
          <span className="font-sofia font-bold text-base text-black-60 uppercase">ALL CASINOS</span>
          <span className="text-black-60 mx-1">/</span>
          <span className="font-sofia font-bold text-base text-black-60 uppercase">PLAYERS</span>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-6 min-h-0 min-w-0 px-4 sm:px-6 lg:px-10 w-full overflow-auto">
        <h1 className="font-sofia font-bold text-h2 text-white uppercase leading-none shrink-0">
          PLAYERS
        </h1>
        <div className="border border-contour rounded-basic overflow-hidden bg-white-3 w-full">
          <table className="w-full border-collapse font-sofia text-base">
            <thead>
              <tr className="border-b border-contour">
                <th className="text-left font-bold text-white-60 uppercase py-3 px-4">ID</th>
                <th className="text-left font-bold text-white-60 uppercase py-3 px-4">EMAIL</th>
                <th className="text-left font-bold text-white-60 uppercase py-3 px-4">NAME</th>
                <th className="text-left font-bold text-white-60 uppercase py-3 px-4">COUNTRY</th>
                <th className="text-left font-bold text-white-60 uppercase py-3 px-4">REGISTER DATE</th>
                <th className="w-12" aria-hidden />
              </tr>
            </thead>
            <tbody>
              {MOCK_PLAYERS.map((player) => (
                <tr key={player.id} className="border-b border-contour last:border-b-0 hover:bg-white/5 transition-colors">
                  <td className="py-3 px-4 text-white">{player.id}</td>
                  <td className="py-3 px-4 text-white">{player.email}</td>
                  <td className="py-3 px-4 text-white">{player.name}</td>
                  <td className="py-3 px-4 text-white">{player.country}</td>
                  <td className="py-3 px-4 text-white">{player.registerDate}</td>
                  <td className="py-3 px-4">
                    <Link to={`/players/${player.id}`} className="font-sofia font-bold text-primary hover:text-primary-high uppercase text-sm">
                      Open →
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
