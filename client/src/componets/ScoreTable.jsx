import React, { useEffect, useState } from 'react';
import Score from './Score';
import '../styless/scoreTable.css';
import { getAllScores } from '../utils/Api';

const ScoreTable = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getAllScores()
      .then((res) => setUsers(res.data))
      .catch((err) => console.error(err));
  }, []);
  console.log(users);
  return (
    <div className='score-table'>
      <div className='score-table__content'>
        <h2 className='score-table__title'>Лучшие игроки</h2>
        <div className='score-table__scors'>
          <div className='score-table__description score-table__score'>
            <span className='score-table__name'>Имя</span>
            <span className='score-table__name'>Лучшая попытка</span>
          </div>
          {users.map((item, index) => (
            <Score
              key={index}
              name={item.email.split('@')[0]}
              score={Math.max(...item.scores) || 0}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScoreTable;
