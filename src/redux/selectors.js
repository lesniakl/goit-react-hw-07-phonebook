import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;
export const selectLoading = state => state.contacts.isLoading;
export const selectFilter = state => state.filter;

export const selectFiltered = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    const filterLower = filter.toLowerCase();
    return contacts.filter(contact => {
      const nameLower = contact.name.toLowerCase();
      return nameLower.includes(filterLower);
    });
  }
);
