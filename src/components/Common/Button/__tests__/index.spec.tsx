import { render } from '@/libs/testing';
import Button from '..';

describe('Button 컴포넌트 테스트', () => {
  it('올바르게 렌더링됨', () => {
    const { container } = render(<Button>버튼</Button>);

    expect(container).toBeInTheDocument();
  });
});
