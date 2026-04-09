import { useLanguage } from '../context/LanguageContext';

const CategoryFilter = ({ categories, activeCategory, onCategoryChange }) => {
  const { t, language } = useLanguage();
  
  return (
    <div className="category-filter">
      {categories.map((category) => (
        <button
          key={category.id}
          className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
          onClick={() => onCategoryChange(category.id)}
          aria-label={t(`menu.categories.${category.id}`)}
        >
          {t(`menu.categories.${category.id}`)}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
