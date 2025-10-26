import cn from 'classnames';

export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  const isMale = sex === 'm';
  const partnerRole = isMale ? 'wife' : 'husband';

  return (
    <section className="Person">
      <h2
        className={cn('Person__name', {
          'Person__name--married': isMarried,
          'Person__name--single': !isMarried,
        })}
      >
        {`My name is ${name}`}
      </h2>
      {age && (
        <p
          className={cn('Person__age', {
            'Person__age--adult': age >= 18,
            'Person__age--minor': age < 18,
          })}
        >
          {`I am ${age}`}
        </p>
      )}

      <p
        className={cn('Person__partner', {
          'Person__partner--married': isMarried,
          'Person__partner--single': !isMarried,
        })}
      >
        {isMarried
          ? `${partnerName} is my ${partnerRole}`
          : 'I am not married'}
      </p>
    </section>
  );
};
