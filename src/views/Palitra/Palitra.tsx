import { useState } from 'react';
import { RootState } from '../../store/store';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { addItem, editItem, deleteItem } from '../../store/palitraSlice';

import styles from './Palitra.module.scss';

const Palitra = () => {
  const [color, setColor] = useState('#785e5e');
  const palitra = useSelector((state: RootState) => state.palitraSlice);
  const dispatch = useDispatch();

  const addColor = () => {
    const id = Math.random();

    dispatch(addItem({ color, id }));
  };

  return (
    <div className={styles.palitra}>
      <Link to='/'>Timer Page</Link>

      <div className={styles.top}>
        <input onChange={(e) => setColor(e.target.value)} className={styles.color} type='color' />
        <button onClick={addColor}>Добавить цвет</button>
      </div>

      <ul className={styles.list}>
        {palitra.colors.map((item) => (
          <>
            <li key={item.id}>
              <input
                onChange={(e) => dispatch(editItem({ color: e.target.value, id: item.id }))}
                value={item.color}
                className={styles.color}
                type='color'
              />
              <span>{item.color}</span>

              <button onClick={() => dispatch(deleteItem(item.id))}> &#215;</button>
            </li>
          </>
        ))}
      </ul>
    </div>
  );
};

export default Palitra;
