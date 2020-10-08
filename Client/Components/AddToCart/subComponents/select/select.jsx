import React from 'react';
import styles from './select.module.css';



var Select = ({keyGenerator, sizes, quantity}) => {
  return (
    <div>

        {/* first Select bar */}
       <label className={styles.label} >
          Size
          <br />
          <select className={styles.select}>
            <option>Select Size</option>
            {sizes.map(size =>
            <option key={keyGenerator()} >
              {size}
            </option>
            )}
          </select>
        </label>

        {/* second Select bar */}
        <label className={styles.label} >
          Quantity
          <br />
          <select className={styles.select}>
            {quantity.map(number =>
            <option key={keyGenerator()}>
              {number}
            </option>
            )}
          </select>
        </label>

    </div>
  )
}


export default Select;