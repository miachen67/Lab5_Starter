// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

// Test Valid Phone Numbers
test('test 12345678910', () => {
    expect(isPhoneNumber(12345678910)).toBe(false);
});
test('test 123aaa3334', () => {
    expect(isPhoneNumber('123aaa3334')).toBe(false);
});
test('test 123-000-3334', () => {
    expect(isPhoneNumber('123-000-3334')).toBe(true);
});
test('test 122-111-0000', () => {
    expect(isPhoneNumber('123-000-3334')).toBe(true);
});

// Test Valid email
test('test sth@ucsd.edu', () => {
  expect(isEmail("sth@ucsd.edu")).toBe(true);
});
test('test hihi@gmail.com', () => {
  expect(isEmail("hihi@gmail.com")).toBe(true);
});
test('test null', () => {
  expect(isEmail("")).toBe(false);
});
test('test hi@hi@ucsd.edu', () => {
  expect(isEmail("hi@hi@ucsd.edu")).toBe(false);
});

// Test Date
test('test 5/25/2025', () => {
  expect(isDate("5/25/2025")).toBe(true);
});
test('test 52/4/2025', () => {
  expect(isDate("52/4/2025")).toBe(true);
});
test('test 2/4/25', () => {
  expect(isDate("2/4/25")).toBe(false);
});
test('test 241/4/1125', () => {
  expect(isDate("241/4/1125")).toBe(false);
});

// Test strong passwords
test('test a34', () => {
    expect(isStrongPassword('a34')).toBe(false);
});
test('test a34asjdklajfalksdjf123', () => {
    expect(isStrongPassword('a34asjdklajfalksdjf123')).toBe(false);
});
test('test a3mf_', () => {
    expect(isStrongPassword('a3mf_')).toBe(true);
});
test('test a493_6', () => {
    expect(isStrongPassword('a493_6')).toBe(true);
});

// text valid HEX
test('test a493_6', () => {
    expect(isHexColor('a493_6')).toBe(false);
});
test('test 5ab5gba', () => {
  expect(isHexColor('5ab5gba')).toBe(false);
});
test('test FFFFFF', () => {
    expect(isHexColor('FFFFFF')).toBe(true);
});
test('test EFE', () => {
    expect(isHexColor('EFE')).toBe(true);
});