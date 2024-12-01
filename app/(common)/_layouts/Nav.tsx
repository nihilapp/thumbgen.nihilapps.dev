'use client';

import styled from 'styled-components';
import Link from 'next/link';
import { Layout } from './layout.styled';

interface Props {
  children?: React.ReactNode;
}

const List = styled.ul``;
const Item = styled.li``;
const NavLink = styled(Link)``;

export function Nav({ children, }: Props) {
  return (
    <Layout.Nav>
      <List>
        <Item>
          <NavLink href='/'>
            Home
          </NavLink>
        </Item>
      </List>
    </Layout.Nav>
  );
}
