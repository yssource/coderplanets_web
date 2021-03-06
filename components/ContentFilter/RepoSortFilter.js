import React from 'react'

import { ICON_CMD } from '@config'

import { FILTER } from '@utils'
import {
  ColumnWrapper,
  SelectLable,
  LabelDivider,
  LeftAlignWrapper,
  SelectIcon,
  SelectTitle,
  SelectItem,
} from './styles'

const RepoSortFilter = ({ activeFilter, onSelect }) => (
  <ColumnWrapper>
    <SelectLable>
      <SelectIcon src={`${ICON_CMD}/click.svg`} />
      <SelectTitle>排序</SelectTitle>
    </SelectLable>
    <LabelDivider />

    <LeftAlignWrapper offset="10px">
      <SelectItem
        active={activeFilter.sort === FILTER.MOST_GITHUB_STAR}
        onClick={onSelect.bind(this, { sort: FILTER.MOST_GITHUB_STAR })}
      >
        最多Star
      </SelectItem>
      <SelectItem
        active={activeFilter.sort === FILTER.MOST_GITHUB_FORK}
        onClick={onSelect.bind(this, { sort: FILTER.MOST_GITHUB_FORK })}
      >
        最多Fork
      </SelectItem>

      <SelectItem
        active={activeFilter.sort === FILTER.MOST_GITHUB_WATCH}
        onClick={onSelect.bind(this, { sort: FILTER.MOST_GITHUB_WATCH })}
      >
        最多Watch
      </SelectItem>

      <SelectItem
        active={activeFilter.sort === FILTER.MOST_VIEWS}
        onClick={onSelect.bind(this, { sort: FILTER.MOST_VIEWS })}
      >
        最多浏览
      </SelectItem>
      <SelectItem
        active={activeFilter.sort === FILTER.MOST_FAVORITES}
        onClick={onSelect.bind(this, { sort: FILTER.MOST_FAVORITES })}
      >
        最多收藏
      </SelectItem>
      <SelectItem
        active={activeFilter.sort === FILTER.MOST_COMMENTS}
        onClick={onSelect.bind(this, { sort: FILTER.MOST_COMMENTS })}
      >
        最多评论
      </SelectItem>
    </LeftAlignWrapper>
  </ColumnWrapper>
)

export default RepoSortFilter
