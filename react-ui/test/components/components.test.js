// import React from 'react';
// import ReactDOM from 'react-dom';
// import { shallow, mount } from 'enzyme';
// import { withRouter } from 'react-router';
// import { Provider } from 'react-redux';
// import App from '../../src/components/App'
// import Compare from '../../src/components/Compare';
// import FavoriteButton from '../../src/components/FavoriteButton';
// import Favorites from '../../src/components/Favorites';
// import Filters from '../../src/components/Filters';
// import Header from '../../src/components/Header';
// import Map from '../../src/components/Map';
// import SchoolCard from '../../src/components/SchoolCard/SchoolCard';
// import SearchResults from '../../src/components/SearchResults';
// import SearchSpinner from '../../src/components/SearchSpinner';
// import SignIn from '../../src/components/SignIn';
// import UserProfile from '../../src/components/UserProfile';
//
//
// describe('Component tests', () => {
//   const wrapper =  withRouter(<App />);
//   const compareWrapper = withRouter(<Compare />);
//   const favoriteButtonWrapper = withRouter(<FavoriteButton />);
//   const favoritesWrapper = withRouter(<Favorites />);
//   const filtersWrapper = withRouter(<Filters />);
//   const headerWrapper = withRouter(<Headers />);
//   const mapWrapper = withRouter(<Map />);
//   const schoolCardWrapper = withRouter(<SchoolCard />);
//   const searchResultsWrapper = withRouter(<SearchResults />);
//   const searchSpinnerWrapper = withRouter(<SearchSpinner />);
//   const signInWrapper = withRouter(<SignIn />);
//   const userProfileWrapper = withRouter(<UserProfile />);
//
//   it('renders without crashing', () => {
//     expect(wrapper).toBeDefined();
//   });
//
//   it('should render the compare display at the bottom of the screen', () => {
//     expect(compareWrapper).toBeDefined();
//   });
//
//   it('should render a favorite button on each school card', () => {
//     expect(favoriteButtonWrapper).toBeDefined();
//   });
//
//   it('should render the favorited school cards', () => {
//     expect(favoritesWrapper).toBeDefined();
//   });
//
//   it('should render the filters display on the left of the page', () => {
//     expect(filtersWrapper).toBeDefined();
//   });
//
//   it('should render the headers at the top of the page', () => {
//     expect(headerWrapper).toBeDefined();
//   });
//
//   it('should render a map as the main display of the page', () => {
//     expect(mapWrapper).toBeDefined();
//   });
//
//   it('should school cards when a search is made', () => {
//     expect(schoolCardWrapper).toBeDefined();
//   });
//
//   it('should render a search result page when the filters are applied', () => {
//     expect(searchResultsWrapper).toBeDefined();
//   });
//
//   it('should render a spinning load screen while the fetches are being made', () => {
//     expect(searchSpinnerWrapper).toBeDefined();
//   });
//
//   it('should render a user profile when a user is logged in', () => {
//     expect(userProfileWrapper).toBeDefined();
//   });
//
//   it('should render the google oauth display on page load', () => {
//     expect(signInWrapper).toBeDefined();
//   });
//
// });
