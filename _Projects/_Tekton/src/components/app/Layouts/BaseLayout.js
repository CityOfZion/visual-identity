import React from 'react';
import { Route } from 'react-router-dom'
import SideMenuComponent from '../Views/SideMenuComponent/SideMenuComponent';
import TopBarComponent from '../Views/TopBarComponent/TopBarComponent';
import DashboardComponent from '../Views/Dashboard/DashboardComponent';

import DropdownsComponent from '../Views/Dropdowns/DropdownsComponent';
import ButtonsComponent from '../Views/Buttons/ButtonsComponent';
import TypographyComponent from '../Views/Typography/TypographyComponent';
import IconsComponent from '../Views/Icons/IconsComponent';
import SelectionControlsComponent from '../Views/SelectionControls/SelectionComponent';
import InputsComponent from '../Views/Inputs/InputsComponent';
import TabsComponent from '../Views/Tabs/TabsComponent';
import NavigationComponent from '../Views/Navigation/NavigationComponent';
import BreadcrumbsComponent from '../Views/Breadcrumbs/BreadcrumbsComponent';
import PaginationComponent from '../Views/Pagination/PaginationComponent';
import LabelsBadgesComponent from '../Views/LabelsBadges/LabelsBadgesComponent';
import AlertsComponent from '../Views/Alerts/AlertsComponent';
import ModalsComponent from '../Views/Modals/ModalsComponent';
import ProgressBarsComponent from '../Views/ProgressBars/ProgressBarsComponent';
import LoadersComponent from '../Views/Loaders/LoadersComponent';
import MediaComponent from '../Views/Media/MediaComponent';
import PanelsComponent from '../Views/Panels/PanelsComponent';
import TablesComponent from '../Views/Tables/TablesComponent';
import ResponsiveEmbedComponent from '../Views/ResponsiveEmbed/ResponsiveEmbedComponent';
import WellsComponent from '../Views/Wells/WellsComponent';
import HelpersComponent from '../Views/Helpers/HelpersComponent';

const BaseLayout = () => (
  <div>
    <TopBarComponent />
    <SideMenuComponent />
    <section className="content">
        <div className="container-fluid">
          <Route path="/dashboard" component={DashboardComponent} />
  
          <Route path="/dropdowns" component={DropdownsComponent} />
          <Route path="/buttons" component={ButtonsComponent} />
          <Route path="/typography" component={TypographyComponent} />
          <Route path="/icons" component={IconsComponent} />
          <Route path="/selection-controls" component={SelectionControlsComponent} />
          <Route path="/inputs" component={InputsComponent} />
          <Route path="/tabs" component={TabsComponent} />
          <Route path="/navigation" component={NavigationComponent} />
          <Route path="/breadcrumbs" component={BreadcrumbsComponent} />
          <Route path="/pagination" component={PaginationComponent} />
          <Route path="/labels-badges" component={LabelsBadgesComponent} />
          <Route path="/alerts" component={AlertsComponent} />
          <Route path="/modals" component={ModalsComponent} />
          <Route path="/progress-bars" component={ProgressBarsComponent} />
          <Route path="/loaders" component={LoadersComponent} />
          <Route path="/media" component={MediaComponent} />
          <Route path="/panels" component={PanelsComponent} />
          <Route path="/tables" component={TablesComponent} />
          <Route path="/responsive-embed" component={ResponsiveEmbedComponent} />
          <Route path="/wells" component={WellsComponent} />
          <Route path="/helpers" component={HelpersComponent} />  
  
        </div>
    </section>
  </div>
)

export default BaseLayout;