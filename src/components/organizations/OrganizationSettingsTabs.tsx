import NavigationItem from '~/core/ui/Navigation/NavigationItem';
import NavigationMenu from '~/core/ui/Navigation/NavigationMenu';
import MobileNavigationDropdown from '~/core/ui/MobileNavigationMenu';

const links = {
  General: {
    path: '/settings/organization',
    label: 'organization:generalTabLabel',
  },
  Members: {
    path: '/settings/organization/members',
    label: 'organization:membersTabLabel',
  },
};

const OrganizationSettingsTabs = () => {
  const itemClassName = `flex justify-center lg:justify-start items-center w-full`;

  return (
    <>
      <div className={'hidden h-full w-full max-w-[12rem] md:flex'}>
        <NavigationMenu vertical pill>
          <NavigationItem
            className={itemClassName}
            link={links.General}
            depth={0}
          />

          <NavigationItem className={itemClassName} link={links.Members} />
        </NavigationMenu>
      </div>

      <div className={'block w-full md:hidden'}>
        <MobileNavigationDropdown links={Object.values(links)} />
      </div>
    </>
  );
};

export default OrganizationSettingsTabs;
