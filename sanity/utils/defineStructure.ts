/**
 * Helper for creating and typing composable structure parts.
 */
export default function defineStructure<StructureType>(factory: () => StructureType) {
  return factory
}

// S: StructureBuilder, context: ConfigContext
