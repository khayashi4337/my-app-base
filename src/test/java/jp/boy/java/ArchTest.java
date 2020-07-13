package jp.boy.java;

import com.tngtech.archunit.core.domain.JavaClasses;
import com.tngtech.archunit.core.importer.ClassFileImporter;
import com.tngtech.archunit.core.importer.ImportOption;
import org.junit.jupiter.api.Test;

import static com.tngtech.archunit.lang.syntax.ArchRuleDefinition.noClasses;

class ArchTest {

    @Test
    void servicesAndRepositoriesShouldNotDependOnWebLayer() {

        JavaClasses importedClasses = new ClassFileImporter()
            .withImportOption(ImportOption.Predefined.DO_NOT_INCLUDE_TESTS)
            .importPackages("jp.boy.java");

        noClasses()
            .that()
                .resideInAnyPackage("jp.boy.java.service..")
            .or()
                .resideInAnyPackage("jp.boy.java.repository..")
            .should().dependOnClassesThat()
                .resideInAnyPackage("..jp.boy.java.web..")
        .because("Services and repositories should not depend on web layer")
        .check(importedClasses);
    }
}
