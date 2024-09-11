import React from 'react';
import { i18n } from 'src/i18n';

export default function FilterPreview(props) {
  const { values, renders, onClick, onRemove } = props;

  const itemsNotEmpty = Object.keys(values || {})
    .map((key) => {
      if (!renders[key]) {
        return {
          value: null,
        };
      }

      return {
        key: key,
        label: renders[key].label,
        value: renders[key].render(values[key]),
      };
    })
    .filter(
      (item) =>
        item.value ||
        item.value === 0 ||
        item.value === false,
    );

  return (
    <div onClick={onClick} className="filter-preview">
      {!itemsNotEmpty.length || props.expanded ? (
        <div className="filter-preview-left">
          {i18n('common.filters')}
        </div>
      ) : (
        <div className="filter-preview-left">
          {i18n('common.filters')}:
          <span className="filter-preview-values">
            {itemsNotEmpty.map((item) => (
              <span
                key={item.label}
                className="badge badge-dark"
                style={{ cursor: 'default' }}
                onClick={(event) => {
                  event.stopPropagation();
                }}
              >
                {`${item.label}: ${item.value}`}{' '}
                {onRemove && (
                  <i
                    style={{
                      marginLeft: 4,
                      backgroundColor: 'rgba(0,0,0,0.5)',
                      padding: 2,
                      borderRadius: 999,
                      cursor: 'pointer',
                    }}
                    onClick={
                      onRemove
                        ? () => onRemove(item.key)
                        : undefined
                    }
                    className="fas fa-times"
                  ></i>
                )}
              </span>
            ))}
          </span>
        </div>
      )}

      <div className="filter-preview-right">
        {props.expanded ? (
          <i
            key={'fa-chevron-up'}
            className="fas fa-chevron-up"
          ></i>
        ) : (
          <i
            key={'fa-chevron-down'}
            className="fas fa-chevron-down"
          ></i>
        )}
      </div>
    </div>
  );
}
