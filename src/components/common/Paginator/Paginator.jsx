import React, {useState} from 'react';
import styles from './Paginator.module.css';
import cn from "classnames";

const Paginator = ({ totalItemsCount, currentPage, onPageChanged, pageSize, portionSize = 10 }) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    const portionCount = Math.ceil(pagesCount / portionSize);
    const [currentPortion, setCurrentPortion] = useState(1);
    const leftBorder = (currentPortion - 1) * portionSize + 1;
    const rightBorder = currentPortion * portionSize;

    return (
        <div>
            {currentPortion > 1 && <button onClick={() => setCurrentPortion(currentPortion - 1)}>{'<<<<==='}</button>}
            {pages
                .filter(p => p >= leftBorder && p <= rightBorder)
                .map(p => {
                    return (
                        <span
                            className={cn({[styles.selectedPage]: currentPage === p}, styles.pageNumber )}
                            onClick={e => {
                                onPageChanged(p);
                            }}
                        >
                            {p}{' '}
                        </span>
                    );
                })}
            {portionCount > currentPortion && (
                <button onClick={() => setCurrentPortion(currentPortion + 1)}>{'===>>>'}</button>
            )}
        </div>
    );
};

export default Paginator;
