import BookmarkIconLight from '@/assets/icons/logo-light-theme.svg';
import BookmarkIconDark from '@/assets/icons/logo-dark-theme.svg'

export const Logo = () => {
  return (
    <>
      <BookmarkIconLight className="block dark:hidden" />
      <BookmarkIconDark className="hidden dark:block" />
    </>
  );
};
