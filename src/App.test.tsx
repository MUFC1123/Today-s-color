import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';

describe('App component', () => {
  test('renders the initial UI', () => {
    render(<App />);
    // タイトルのテスト
    const titleElement = screen.getByTestId('colorful-title');
    expect(titleElement).toHaveTextContent("Today's color:");
    // ドロップダウンメニューのテスト
    expect(screen.getByRole('combobox')).toBeInTheDocument();
    // 初期状態では色ブロックが表示されないことのテスト
    expect(screen.queryByText('Change')).not.toBeInTheDocument();
  });

  test('generates the correct number of color blocks when a number is selected', () => {
    render(<App />);
    // ドロップダウンから2色を選択
    fireEvent.change(screen.getByRole('combobox'), { target: { value: '2' } });
    // 2つの「Change」ボタンが表示されることを確認
    expect(screen.getAllByText('Change').length).toBe(2);
  });

  test('changes color of a single block when the Change button is clicked', async () => {
    render(<App />);
    // 1色を選択
    fireEvent.change(screen.getByRole('combobox'), { target: { value: '1' } });
    
    // ボタンを取得し、null でないことを確認
    const button = screen.getByRole('button', { name: 'Change' });
    expect(button).toBeInTheDocument();
    
    // parentNode が null でないことを確認
    const parent = button.parentNode;
    expect(parent).not.toBeNull();
    
    // firstChild が HTMLElement であることを確認
    const firstChild = parent?.firstChild;
    expect(firstChild).toBeInstanceOf(HTMLElement);
    
    // HTMLElement であることが確認できれば、style に安全にアクセスできる
    const initialColor = (firstChild as HTMLElement).style.backgroundColor;
    
    // 「Change」ボタンをクリック
    fireEvent.click(button);
    
    // 色が変更されたかテスト
    const newColor = (firstChild as HTMLElement).style.backgroundColor;
    expect(newColor).not.toBe(initialColor);
  })

  });