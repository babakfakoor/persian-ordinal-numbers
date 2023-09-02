
import persianOrdinalNumbers from './persianOrdinalNumbers';

test('Three Numbers To Letter 123', () => {
  expect(persianOrdinalNumbers(123)).toBe('یکصد و بیست و سوم');
});

test('Extra Chars  2.3345', () => {
  expect(persianOrdinalNumbers('%2.33a45')).toBe('%2.33a45');
});

test('Decimal Test  2.3345', () => {
  expect(persianOrdinalNumbers(2.3345)).toBe('دوم');
});

test('Negative test', () => {
  expect(persianOrdinalNumbers(-11)).toBe(-11);
});
test('Three Numbers To Letter 1', () => {
  expect(persianOrdinalNumbers(1)).toBe('اول');
});
test('Three Numbers To Letter 3', () => {
  expect(persianOrdinalNumbers(1)).toBe('سوم');
});
test('Three Numbers To Letter 30', () => {
  expect(persianOrdinalNumbers(1)).toBe('سی‌ام');
});
test('Three Numbers To Letter 10', () => {
  expect(persianOrdinalNumbers(10)).toBe('دهم');
});
test('test 0', () => {
  expect(persianOrdinalNumbers(0)).toBe(0);
});
test('test 100', () => {
  expect(persianOrdinalNumbers(100)).toBe('یکصدم');
});
test('test 101', () => {
  expect(persianOrdinalNumbers(101)).toBe('یکصد و یکم');
});
test('test 1250', () => {
  expect(persianOrdinalNumbers(1250)).toBe('یک هزار و دویست و پنجاهم');
});
test('test 10001', () => {
  expect(persianOrdinalNumbers(10001)).toBe('ده هزار و یکم');
});
test('test 101009', () => {
  expect(persianOrdinalNumbers(101009)).toBe('یکصد و یک هزار و نهم');
});
test('test 5000000', () => {
  expect(persianOrdinalNumbers(5000000)).toBe('پنج میلیونم');
});
test('test 10,000,000,000,000,001', () => {
  expect(persianOrdinalNumbers('10000000000000001')).toBe('ده بیلیارد و یکم');
});
test('test 10,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,002,001', () => {
  expect(persianOrdinalNumbers('10000000000000000000000000000000000000000000000000000000002001')).toBe('ده دسیلیون و دو هزار و یکم');
});
test('test 100,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,001', () => {
  expect(persianOrdinalNumbers('100000000000000000000000000000000000000000000000000000000000000001')).toBe('یکصد دسیلیارد و یکم');
});