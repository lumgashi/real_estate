import React from 'react'
import {Box} from '@chakra-ui/react'

function Footer() {
      const thisYear = new Date().getFullYear();
      return (
            <Box textAlign="center" p="5" color="gray.600" borderTop="1px" borderColor="gray.100">
                  {thisYear} Realtor Inc.
            </Box>
      )
}

export default Footer
