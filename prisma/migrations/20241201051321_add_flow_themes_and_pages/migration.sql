-- CreateTable
CREATE TABLE `flow_themes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `flow_id` INTEGER NOT NULL,
    `theme_id` INTEGER NOT NULL,
    `status` TINYINT NULL DEFAULT 1,
    `created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `fk_flow_id_themes`(`flow_id`),
    INDEX `fk_theme_id`(`theme_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `flow_pages` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `flow_id` INTEGER NOT NULL,
    `page_id` INTEGER NOT NULL,
    `status` TINYINT NULL DEFAULT 1,
    `created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `fk_flow_id_pages`(`flow_id`),
    INDEX `fk_page_id`(`page_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `flow_themes` ADD CONSTRAINT `fk_flow_id_themes` FOREIGN KEY (`flow_id`) REFERENCES `flows`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `flow_themes` ADD CONSTRAINT `fk_theme_id` FOREIGN KEY (`theme_id`) REFERENCES `themes`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `flow_pages` ADD CONSTRAINT `fk_flow_id_pages` FOREIGN KEY (`flow_id`) REFERENCES `flows`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `flow_pages` ADD CONSTRAINT `fk_page_id` FOREIGN KEY (`page_id`) REFERENCES `pages`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
