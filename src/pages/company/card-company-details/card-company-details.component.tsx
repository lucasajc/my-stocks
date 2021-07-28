import React from 'react'
import { Card } from 'components/card/card.component'
import Company from 'client-api/company/company.model'
import { Text } from 'components/text/text.component'
import {
  Cell,
  FieldTitle,
  FieldValue,
  Grid,
} from './card-company-details.styled'

interface IFieldProps {
  title: string
  value: string | number
}

type Props = Pick<
  Company,
  | 'industry'
  | 'website'
  | 'CEO'
  | 'sector'
  | 'employees'
  | 'tags'
  | 'city'
  | 'country'
>

const Field = ({ title, value }: IFieldProps) => {
  return (
    <>
      <FieldTitle>
        <Text size="md" weight="bold">
          {title}
        </Text>
      </FieldTitle>
      <FieldValue>
        <Text size="md" weight="light">
          {value || 'N/A'}
        </Text>
      </FieldValue>
    </>
  )
}

export const CardCompanyDetails = ({
  industry,
  website,
  CEO,
  sector,
  employees,
  tags,
  city,
  country,
}: Props) => {
  return (
    <Card>
      <Grid>
        <Cell>
          <Field title="Industry" value={industry} />
          <Field title="Sector" value={sector} />
          <Field title="CEO" value={CEO} />
          <Field title="Number of employees" value={employees} />
        </Cell>
        <Cell>
          <Field title="City" value={city} />
          <Field title="Country" value={country} />
          <Field title="Website" value={website} />
          <Field title="Tags" value={tags.join(', ')} />
        </Cell>
      </Grid>
    </Card>
  )
}
